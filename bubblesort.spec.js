describe('Bubble Sort', function(){
  beforeEach(function() {
  	spyOn(window, 'swap').and.callThrough();
  	spyOn(window, 'compare')and.callThrough();
  })

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect(swap.calls.count()).toEqual(0);
    expect(compare.calls.count()).toEqual(0)
  });

  it('handles an array with one element', function () {
  	expect (bubbleSort([2]) ).toEqual( [2] );
  	expect(swap.calls.count()).toEqual(0);
  	expect(swap.calls.count()).toEqual(0)
  });
  
});

describe('Swap', function () {

});

describe('Compare', function () {

});




var count = foo.setBar.calls.count(); 