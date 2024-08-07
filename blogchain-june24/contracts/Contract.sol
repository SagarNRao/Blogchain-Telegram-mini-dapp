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
    address public owner;
    mapping(uint => uint) public postRewards;

    constructor() {
        owner = msg.sender;
        tokenaddress = address(new MyTokenContract());
    }

    modifier onlyowner() {
        require(msg.sender == owner, "Unauthorized");
        _;
    }

    modifier onlyusers() {
        require(
            userAccs[msg.sender].username != address(0),
            "You need an account to perform this action"
        );
        _;
    }

    // yes ive added a little bit of account creation and manipulation but they make no difference as of now

    struct account {
        address username;
        bool isExpert;
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
    account[] private accounts;

    // Mapping of post id to the wallet address of the user
    mapping(uint256 => address) postToOwner;
    mapping(uint => uint) public likes;
    event PostLiked(uint postId, address liker);
    mapping(uint => uint) public approvals;
    event PostApproved(uint postId, address approver);
    event Validatepost(uint postId, bool isVerified);

    //mapping of address to account
    mapping(address => account) public userAccs;

    // Method to be called by our frontend when trying to add a new post
    function addpost(
        string memory postText,
        bool isDeleted
    ) external onlyusers {
        uint postId = posts.length;
        bool isVerified = false; // Declare the variable isVerified
        posts.push(
            post(postId, msg.sender, postText, isDeleted, isVerified, 0, 0)
        );
        postToOwner[postId] = msg.sender;
        emit Addpost(msg.sender, postId);
    }

    // Method to get all the posts
    function getfeed() external view returns (post[] memory) {
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
    function likePost(uint _postId) external onlyusers {
        likes[_postId]++;

        emit PostLiked(_postId, msg.sender);
    }

    // Function to approve a post
    function expertapprove(uint _postId) external onlyusers {
        approvals[_postId]++;
        if (approvals[_postId] > 10) {
            posts[_postId].isVerified = true;
            emit Validatepost(_postId, true);
        }
        emit PostApproved(_postId, msg.sender);
    }

    // Function to validate a post
    function validatepost(uint _postId) external onlyusers {
        require(!posts[_postId].isVerified, "post already verified");

        if (approvals[_postId] > 10) {
            posts[_postId].isVerified = true;
            emit Validatepost(_postId, true);

            address posterAddress = postToOwner[_postId];
            uint tokenReward = 100; // adjust the reward amount as needed
            postRewards[_postId] = tokenReward;
            MyTokenContract(tokenaddress).transfer(posterAddress, tokenReward);
        }
    }

    // ---------------------------------------------
    // account manipulation

    function createAccount(bool isExpert) external {
        userAccs[msg.sender] = account({
            username: msg.sender,
            isExpert: true // will be set to true for testing purposes
        });
        accounts.push(userAccs[msg.sender]);
    }

    function ascention(address new_expert) public onlyowner {
        require(msg.sender == owner, "Unauthorized");
        userAccs[new_expert].isExpert = true; // Assuming you want to set the new expert's isExpert to true
    }

    function isExpertcheck(address user) external view returns (bool) {
        return userAccs[user].isExpert;
    }
}
