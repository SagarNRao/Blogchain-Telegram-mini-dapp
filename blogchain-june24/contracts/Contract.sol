// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.19;
import "./MyTokenContract.sol";
/**
 * @title MyValContract
 * @dev Store & retrieve value in a variable
 */
contract MyValContract {
    event Addpost(address recipient, uint postId);
    event Deletepost(uint postId, bool isDeleted);

    address public tokenaddress;
    mapping(uint => uint) public postRewards;

    constructor() {
        tokenaddress = address(new MyTokenContract());
    }

    struct post {
        uint id;
        address username;
        string postText;
        bool isDeleted;
        bool isVerified;
        uint likes;
        uint approvals;
    }

    post[] private posts;

    // Mapping of post id to the wallet address of the user
    mapping(uint256 => address) postToOwner;
    mapping(uint => uint) public likes;
    event PostLiked(uint postId, address liker);
    mapping(uint => uint) public approvals;
    event PostApproved(uint postId, address approver);
    event Validatepost(uint postId, bool isVerified);

    // Method to be called by our frontend when trying to add a new post
    function addpost(string memory postText, bool isDeleted) external {
        uint postId = posts.length;
        bool isVerified = false; // Declare the variable isVerified
        posts.push(
            post(postId, msg.sender, postText, isDeleted, isVerified, 0, 0)
        );
        postToOwner[postId] = msg.sender;
        emit Addpost(msg.sender, postId);
    }

    // Method to get all the posts
    function getAllposts() external view returns (post[] memory) {
        post[] memory temporary = new post[](posts.length);
        uint counter = 0;
        for (uint i = 0; i < posts.length; i++) {
            if (posts[i].isDeleted == false) {
                temporary[counter] = posts[i];
                counter++;
            }
        }

        post[] memory result = new post[](counter);
        for (uint i = 0; i < counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }

    // Function to like a post
    function likePost(uint _postId) external {
        likes[_postId]++;

        emit PostLiked(_postId, msg.sender);
    }

    // Function to approve a post
    function expertapprove(uint _postId) external {
        approvals[_postId]++;
        if (approvals[_postId] > 10) {
            posts[_postId].isVerified = true;
            emit Validatepost(_postId, true);
        }
        emit PostApproved(_postId, msg.sender);
    }

    // Function to validate a post
    function validatepost(uint _postId) external {
        require(!posts[_postId].isVerified, "post already verified");

        if (approvals[_postId] > 10) {
            posts[_postId].isVerified = true;
            emit Validatepost(_postId, true);

            address posterAddress = postToOwner[_postId];
            uint tokenReward = 100; // adjust the reward amount as needed
            postRewards[_postId] = tokenReward;
            MyTokenContract(tokenaddress).transfer(
                posterAddress,
                tokenReward
            );
        }
    }
}
