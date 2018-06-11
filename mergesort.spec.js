describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });

  //Might not
  it('handles empy', function() {
    expect(split([])).toEqual([]);
  });
  //Might not
  it('only has one element', function() {
    expect(split([1])).toEqual([1]);
  });

  it('splits an odd amount of elements', function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
  });
});

// handles arrays of different lengths
describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });
  it('should handle empty arrays', function() {
    expect(merge([], [])).toEqual([]);
  });
  it('only has one element', function() {
    expect(merge([1], [])).toEqual([1]);
  });
  it('handles arrays of different lengths', function() {
    expect(merge([1, 3, 5], [2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('Merge Sort', function() {
  //    beforeEach(function(){
  //
  //        spyOn(window,'swap').and.callthrough();

  it('handles an empty array', function() {
    expect(mergeSort([])).toEqual([]);
  });

  //takes an array and sorts it
  it('takes an array of numbers and sorts it', function() {
    expect(mergeSort([6, 4, 3, 5, 1, 2])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  //If it has non unique values, it sorts them correctly
  it('sorts non-unique values along with unique values', function() {
    expect(mergeSort([4, 1, 2, 2, 2])).toEqual([1, 2, 2, 2, 4]);
  });

  //just 1
  it('handles an array of one element', function() {
    expect(mergeSort([5])).toEqual([5]);
  });

  it('throws exception for non numeric values', function() {
    expect(mergeSort([1, 3, 2, 'Hello'])).toEqual('Error: Non-Numeric Value');
  });
});
