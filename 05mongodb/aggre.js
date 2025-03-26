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

//who has registered most recently
[
  {
    $sort: {
      registered: -1
    }
  },
  {$limit: 4},
  {
    $project: {
      name: 1,
      registered: 1,
      favoriteFruit: 1
    }
  }
]

//categorise users by their fav fruit
[
  {
    $group: {
      _id: "$favoriteFruit",
      users: { $push: "$name"}
    }
  }
]

//how many users have 'ad' as the second tag in their list of tags?
[
  {
     $match: {
      "tags.1": "ad",
     }
  },
  {
    $count: 'secondTagAd'
  }
]

//Find users who have both 'enim' and 'id' as their tags
[
  {
    $match: {
      tags: {$all: ["enim", "id"]}
    }
  }
]

//List all companies located in the USA with their corresponding user count.
[
  {
    $match: {
      "company.location.country": "USA"
    }
  },
  {
    $group: {
      _id: "$company.title",
      userCount: {$sum: 1}
    }
  }
]

//lookup in mongodb aggregation
[
  {
    $lookup: {
      from: "authors",
      localField: "author_id",
      foreignField: "_id",
      as: "author_details"
    }
  },
  {
    $addFields: {
      author_details: {
        $arrayElemAt: ["$author_details", 0]
      }
    }
  }
]