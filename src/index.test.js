const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Scenario', () => {
  it('When grade is 98, then it should be Outstanding!', () => {
    // Arrange
    var data = 98;
    var expected ='O Outstanding';
    // Act
    var result = gradeClassifier(data);
    // Assert
    expect(result).toBe(expected);
  });

  it('When grade is 93, then it should be Very Good!', () => {
    // Arrange
    var data = 93;
    var expected ='V Very Good';
    // Act
    var result = gradeClassifier(data);
    // Assert
    expect(result).toBe(expected);
  });

  it('When grade is 87, then it should be Good!', () => {
    // Arrange
    var data = 87;
    var expected ='G Good';
    // Act
    var result = gradeClassifier(data);
    // Assert
    expect(result).toBe(expected);
  });

  it('When grade is 82, then it should be Satisfactory!', () => {
    // Arrange
    var data = 82;
    var expected ='S Satisfactory';
    // Act
    var result = gradeClassifier(data);
    // Assert
    expect(result).toBe(expected);
  });

  it('When grade is 77, then it should be Needs Improvement!', () => {
    // Arrange
    var data = 77;
    var expected ='N Needs Improvement';
    // Act
    var result = gradeClassifier(data);
    // Assert
    expect(result).toBe(expected);
  });

  it('When grade is 60, then it should be Did not Meet Expectation!', () => {
    // Arrange
    var data = 60;
    var expected ='D Did not Meet Expectation';
    // Act
    var result = gradeClassifier(data);
    // Assert
    expect(result).toBe(expected);
  });
});
