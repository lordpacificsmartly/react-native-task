import React, { useState } from "react";
import { View, Button, FlatList, ActivityIndicator,TextInput,StyleSheet} from "react-native";
import Post from "./Post";

const Posts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  // TODO add your code
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [filteredPost, setFilteredPost] = useState(posts);
  const getPostFromApi = async () => {
    return fetch(url)
      .then((response) => 
        response.json()
      )
      .then((responseJson) => {
        setLoaded(true);
        setPosts(responseJson);
        setFilteredPost(responseJson);
        setLoading(false)
        return responseJson;
      })
      .catch((error) =>
       {
        setLoading(false) 
        alert(error)
      }
      )
      // .finally(setLoading(false));
  };
  const handleFilter = (searchWord) => {
    if (!searchWord) return setFilteredPost(posts);
    let result = posts.filter((data) => {
      return (
        data.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1 ||
        data.body.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
      );
    });
    console.log(result);
    setFilteredPost(result);
  };
  return (
    <View>
      {isLoading && <ActivityIndicator color="red" />}
      {!loaded?
        <Button
          onPress={() => {
            setLoading(true)
            getPostFromApi()}}
          title="Load posts"
          testID="load-posts"
        />
      :
      <View style={styles.postContainer}>
        <TextInput
          testID="search"
          placeholder="Search"
          placeholderTextColor="black"
          style={styles.input}
          onChangeText={(searchWord) => {
            handleFilter(searchWord);
          }}
          style={styles.input}
        />
        <FlatList
          data={filteredPost}
          keyExtractor={(posts) => posts.id.toString()}
          renderItem={({ item }) => <Post post={item} />}
        />
      </View>
      }
      {console.log(isLoading)}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
  },
  postContainer: {
    marginRight: 20,
    marginLeft: 20,
    width: "90%",
  },
});
export default Posts;