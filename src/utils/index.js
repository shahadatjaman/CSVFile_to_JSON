export const getTargetedJSON = (values) => {
  return values.map((obj) => {
    const {
      question,
      options,
      topic,
      "Difficulty level": difficultyLevel,
      "sub Topic": subTopic,
    } = obj;
    if (options) {
      const { answers, choices } = JSON.parse(options?.toString());

      const optionObject = { answers: answers, choices: choices };

      return {
        questionName: question,
        optionObject: optionObject,
        topicName: topic,
        difficultyLevel: difficultyLevel,
        subTopic: subTopic,
        marks: "1",
        _id: "dfd5f4d56f4df4d",
      };
    } else {
      return null;
    }
  });
};
