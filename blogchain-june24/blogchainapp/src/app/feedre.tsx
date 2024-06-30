"use client";

import { useReadContract } from "thirdweb/react";
import { useQuery } from "@tanstack/react-query";
import { ValidityContract } from "../../utils/constants";

export default function feedre(){
    const { data, isLoading } = useReadContract({ 
        ValidityContract, 
        method: "function getAllposts() view returns ((uint256 id, address username, string postText, bool isDeleted)[])", 
        params: [] 
      });
    }

  return (
    <div>
      {loadingposts ? (
        <h2>...</h2>
      ) : (
        <div>
          <h2>Posts</h2>
          {posts?.map((post, index) => (
            <div key={index}>
              <p>{post.postText}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
