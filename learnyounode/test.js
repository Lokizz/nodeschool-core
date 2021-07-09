const myObj = {
  a: 1,
  test() {
    console.log('test');
    // console.log(a);
    console.log(this.a);
    console.log(myObj.a);
  }
};

