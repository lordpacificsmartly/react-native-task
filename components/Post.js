import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Post = ({ post: { userId, id, title, body } }) => (
  <View style={styles.post}>
    <Text style={styles.postTitle}>{title}</Text>
    <Text style={styles.postBody}>{body}</Text>
  </View>
);


const styles = StyleSheet.create({
  post: {
    marginBottom: 10,
    marginTop: 10,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postBody: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});
export default Post;
