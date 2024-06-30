"use client";

import { useReadContract, TransactionButton } from "thirdweb/react";
import { ValidityContract } from "../../utils/constants";
import { prepareContractCall } from "thirdweb";

export const Feedre: React.FC = () => {
  const {
    data: posts,
    isLoading: loadingposts,
    refetch,
  } = useReadContract({
    contract: ValidityContract,
    method: "getAllposts",
  });

  console.log("here");
  console.log(posts);
  return (
    <div>
      <TransactionButton
        transaction={() =>
          prepareContractCall({
            contract: ValidityContract,
            method: "getAllposts",
          })
        }
        onError={(error) => console.log("oof", error)}
        onTransactionConfirmed={() => refetch}
      >
        {"getposts"}
      </TransactionButton>
      {loadingposts ? (
        <h2>...</h2>
      ) : (
        <div>
          <h2>Posts</h2>
          {posts &&
            posts.map((post: any, index: number) => (
              <div key={index}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

// the function that fetches all the posts (getAllposts in contract)
// function getAllposts() external view returns (post[] memory) {
//     post[] memory temporary = new post[](posts.length);
//     uint counter = 0;
//     for(uint i=0; i<posts.length; i++) {
//         if(posts[i].isDeleted == false) {
//             temporary[counter] = posts[i];
//             counter++;
//         }
//     }

//     post[] memory result = new post[](counter);
//     for(uint i=0; i<counter; i++) {
//         result[i] = temporary[i];
//     }
//     return result;
// }
