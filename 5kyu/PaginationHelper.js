// https://www.codewars.com/kata/515bb423de843ea99400000a
import { assertEquals } from '../testing.js';

function PaginationHelper(collection, itemsPerPage) {
  this.items = collection.length;
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {
  return this.items;
};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.items / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
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
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
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
};

const tester = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

Deno.test('Pagination1', () => {
  assertEquals(tester.pageCount(), 2);
  assertEquals(tester.itemCount(), 6);
  assertEquals(tester.pageItemCount(0), 4);
  assertEquals(tester.pageItemCount(1), 2);
  assertEquals(tester.pageItemCount(2), -1);

  assertEquals(tester.pageIndex(0), 0);
  assertEquals(tester.pageIndex(5), 1);
  assertEquals(tester.pageIndex(2), 0);
  assertEquals(tester.pageIndex(20), -1);
  assertEquals(tester.pageIndex(-10), -1);
});
