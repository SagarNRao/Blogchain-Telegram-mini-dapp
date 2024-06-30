import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

interface Post {
  id: number;
  content: string;
  username: string;
}

export default function Feed() {
  const getnewposts = async (
    allposts: Post[],
    address: string
  ): Promise<Post[]> => {
    let newposts = [];

    for (let i = 0; i < allposts.length; i++) {
      if (allposts[i].username.toLowerCase() == address.toLowerCase()) {
        let post = {
          id: allposts[i].id,
          content: allposts[i].content,
          username: allposts[i].username,
        };
        newposts.push(post);
      } else {
        let post = {
          id: allposts[i].id,
          content: allposts[i].content,
          username: allposts[i].username,
        };
        newposts.push(post);
      }
    }
    return newposts;
  };

  const getallposts = async (contract: any): Promise<void> => {
    let allposts = await Contract.getAllPosts();
  }

}
