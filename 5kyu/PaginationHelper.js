// https://www.codewars.com/kata/515bb423de843ea99400000a

// For this exercise you will be strengthening your page-fu mastery. 
//You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.
// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. 
//The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); //should == 2
// helper.itemCount(); //should == 6
// helper.pageItemCount(0); //should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); //should == 1 (zero based index)
// helper.pageIndex(2); //should == 0
// helper.pageIndex(20); //should == -1
// helper.pageIndex(-10); //should == -1

function PaginationHelper(collection, itemsPerPage){
    this.items = collection.length;
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.items;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.items / this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    var res = this.items;
    if (typeof pageIndex == typeof '') return -1;
    if (pageIndex < 0) return -1;
    if (pageIndex == null) return -1;
    if (pageIndex > this.pageCount()) return -1;
    if (pageIndex == 0) {
        if (this.itemsPerPage > this.items) {
            return this.items;
        } else {
            return this.itemsPerPage;
        }
    }
    for (let i = 0; i < pageIndex; i++) {
        res -= this.itemsPerPage;
    }
    if (res > 0) {
        return res;
    } else {
        return -1;
    }
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    var page = 0;
    var itemCount = 0;
    if (this.collection.length == 0) return -1;
    if (itemIndex == 0) return 0;
    if (itemIndex <= this.items && itemIndex > 0) {
        for (let i = 0; i <= itemIndex; i++) {
            if (itemCount > this.itemsPerPage) {
                page += 1;
                itemCount = 0;
            }
            itemCount++;
        }
    } else {
        return -1;
    }
    return page;
}

var tester = new PaginationHelper(['a','b','c','d','e','f'], 4);
console.log(tester.pageCount() == 2);
console.log(tester.itemCount() == 6);
console.log(tester.pageItemCount(0) == 4);
console.log(tester.pageItemCount(1) == 2);
console.log(tester.pageItemCount(2) == -1);

console.log(tester.pageIndex(0) == 0);
console.log(tester.pageIndex(5) == 1);
console.log(tester.pageIndex(2) == 0);
console.log(tester.pageIndex(20) == -1);
console.log(tester.pageIndex(-10) == -1);