function encode(substring) {
    let A1 = substring.replace(/a/g, 1);
      substring = A1;
    let E2 = substring.replace(/e/g, 2);
      substring = E2;
    let I3 = substring.replace(/i/g, 3);
      substring = I3;
    let O4 = substring.replace(/o/g, 4);
      substring = O4;
    let U5 = substring.replace(/u/g, 5);   
      substring = U5;
    return substring;
  }
  function decode(substring) {
    let umPa = substring.replace(/1/g, 'a');
      substring = umPa;
    let doisPe = substring.replace(/2/g, 'e');
      substring = doisPe;
    let tresPi = substring.replace(/3/g, 'i');
      substring = tresPi;
    let quatroPo = substring.replace(/4/g, 'o');
      substring = quatroPo;
    let cincoPu = substring.replace(/5/g, 'u');   
      substring = cincoPu;
    return substring;}

    const functions = { encode, decode };
    module.exports = functions;