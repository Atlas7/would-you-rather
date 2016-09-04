// Firebase schema (mind map) - this is not really a code. More like a sketch to demo the data structure.
//
// - 1st level properties corresponds to the Firebase root end-points
//   e.g. users corresponds to the root end-point /users on Firebase.
//   e.g. ducks corresponds to the root end-point /ducks on Firebase.
//
// - 2nd level (and further down) "array-properties" corresponds to the sub-end-points.
//   e.g. users.uid[xxx] corresponds to end-point /users/xxx
//        (which expands to an object)
//   e.g. ducks.duckId[ddd] corresponds to end-point /ducks/ddd
//        (which expands the an object)
//   e.g. userDucks.uid[xxx].duckId[ddd] corresponds to end-point /userDucks/xxx/ddd
//        (which expands to an object)
//

let firebaseSchema = {

  //users
  users: {
    [uid]: {
      info: {
        name,
        uid,
        avatar,
      }
    }
  },

  //decisions
  decisions: {
    [decisionId]: {
      decisionId,
      title,
      firstOption: {
        text
      },
      secondOption: {
        text
      },
      timestamp,
      uid,
    }
  },

  //likeCount
  likeCount: {
    [decisionId]: {
      firstOption: 0,
      secondOption: 0
    }
  },

  //usersDecisions
  usersDecisions: {
    [uid]: {
      [decisionId]: {
        decisionId,
        title,
        firstOption: {
          text
        },
        secondOption: {
          text
        },
        timestamp,
        uid,
      }
    }
  },

  //usersLikes
  usersLikes: {
    [uid]: {
      [decisionId]: {
        firstOption: 0,
        secondOption: 0
      }
    }
  }

}