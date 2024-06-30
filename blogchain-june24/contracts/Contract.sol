// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.19;
/**
 * @title Validity Contract
 * @dev Store & retrieve value in a variable
 */
contract ValidityContract {

    event Addpost(address recipient, uint postId);
    event Deletepost(uint postId, bool isDeleted);

    struct post {
        uint id;
        address username;
        string postText;
        bool isDeleted;
    }

    post[] private posts;

    // Mapping of post id to the wallet address of the user
    mapping(uint256 => address) postToOwner;

    // Method to be called by our frontend when trying to add a new post
    function addpost(string memory postText, bool isDeleted) external {
        uint postId = posts.length;
        posts.push(post(postId, msg.sender, postText, isDeleted));
        postToOwner[postId] = msg.sender;
        emit Addpost(msg.sender, postId);
    }

    // Method to get all the posts
    function getAllposts() external view returns (post[] memory) {
        post[] memory temporary = new post[](posts.length);
        uint counter = 0;
        for(uint i=0; i<posts.length; i++) {
            if(posts[i].isDeleted == false) {
                temporary[counter] = posts[i];
                counter++;
            }
        }

        post[] memory result = new post[](counter);
        for(uint i=0; i<counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }

    // Method to get only your posts
    

    // Method to Delete a post
    // function deletepost(uint postId, bool isDeleted) external {
    //     if(postToOwner[postId] == msg.sender) {
    //         posts[postId].isDeleted = isDeleted;
    //         emit Deletepost(postId, isDeleted);
    //     }
    // }

}