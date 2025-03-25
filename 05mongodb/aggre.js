//how many users are active?
[
  {
    //first stage
    $match: {
      isActive: true,
    },
  },
  {
    //second stage
    $count: "activeUsers",
  },
][
  //what is the average age of all the users?
  {
    $group: {
      _id: null, //i dont want to group them in any other thing so i will group them in null id
      averageAge: {
        $avg: "$age",
      },
    },
  }
][
  //list the top 5 most common fruits among users
  ({
    $group: {
      _id: "$favoriteFruit",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      //now count exists as reference to first stage
      count: -1, //ascending order - hoghest value will be at top
    },
  },
  {
    $limit: 5,
  })
][
  //find the total number of males and females
  {
    $group: {
      _id: "$gender",
      count: {
        $sum: 1,
      },
    },
  }
][
  //which country has highest number of registered users
  ({
    $group: {
      _id: "$company.location.country",
      userCount: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      userCount: -1,
    },
  },
  {
    $limit: 2,
  })
][
  //list all unique eye colors present in the collection
  {
    $group: {
      _id: "$eyeColor",
    },
  }
][
  //what is the average number of tags per user?
  ({
    $unwind: "$tags",
  },
  {
    $group: {
      _id: "$_id",
      numberOfTags: { $sum: 1 },
    },
  },
  {
    $group: {
      _id: null,
      averageNumberOfTags: { $avg: "$numberOfTags" },
    },
  })
][
  //one more way for same ques
  ({
    $addfields: {
      numberOfTags: {
        $size: { $ifNull: ["$tags", []] },
      },
    },
  },
  {
    $group: {
      _id: null,
      averageNumberOfTags: { $avg: "$numberOfTags" },
    },
  })
];

//how many users have 'enim' as one of their tags?
[
  {
    $match: {
      //js equivalent of filter
      tags: "enim",
    },
  },
  {
    $count: "userWithEnimTag",
  },
][
  //what are the names and age of users who are inactive and have 'velit as a tag
  ({
    $match: {
      isActive: false,
      tags: "velit",
    },
  },
  {
    $project: {
      name: 1,
      age: 1,
    },
  })
]

  //how many users have ph no starting with '+1 (940)'?
[
  {
    $match: {
      "company.phone": /^\+1 \(940\)/,
    },
  },
  {
    $count: 'userswithSpecialPhoneNumber'
  }
];