// Redux schema (mind map) - - this is not really a code. More like a sketch to demo the data structure.
//
// - 1st level properties are defined by the reducer files stored in app/redux/modules
//   e.g. users is defined by the users.js reducer file
//   e.g. modal is defined by the modal.js reducer file
//
// - 2nd level (and further down) are sub properties of the 1st level object.
//   (Use the Google Chrome Redux extension to visualise the redux schema at each state).

let reduxSchema = {

  //users
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        name,
        uid,
        avatar,
      }
    }
  },

  //modal
  modal: {
    decision: {
      title,
      firstOption: {
        text
      },
      secondOption: {
        text
      }
    },
    isOpen,
  },

  //decisions
  decisions: {
    [decisionId]: {
      lastUpdated,
      info: {
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

  //likeCount
  likeCount: {
    [decisionId]: {
      firstOption: 0,
      secondOption: 0
    }
  },

  //usersDucks
  usersDecisions: {
    isFetching,
    error,
    [uid]: {
      lastUpdated,
      decisionIds: [decisionId, decisionId, decisionId]
    }
  },

  //usersLikes
  usersLikes: {
    decisionId: {
      firstOption: false,
      secondOption: true,
    },
  },

  //feed
  feed: {
    isFetching,
    error,
    newDecisionsAvailable,
    decisionIdsToAdd: [decisionId, decisionId],
    decisionIds: [decisionId, decisionId, decisionId]
  },

  //listeners
  listeners: {
    [listenerId]: true
  }

}