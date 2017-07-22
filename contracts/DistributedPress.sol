pragma solidity ^0.4.11;

contract DistributedPress {
    struct entry {
        string title;
        address author;
        uint uploadTimestamp;
    }

    mapping (bytes32 => entry) public entries;
    bytes32[] public ipfsHashes;
    event entryAdded(bytes32);

    function addEntry(bytes32 ipfsHash, string _title, address _author, uint _uploadTimestamp) {
    	require(entries[ipfsHash].uploadTimestamp == 0);

    	entries[ipfsHash] = entry({title: _title, author: _author, uploadTimestamp: _uploadTimestamp});
    	ipfsHashes.push(ipfsHash);
    	entryAdded(ipfsHash);
    }
}