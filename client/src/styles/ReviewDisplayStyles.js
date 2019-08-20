const styles = {
  review: {
    display: 'flex',
    flexDirection: 'row'
  },
  reviewImg: {
    width: '100px',
    borderRadius: '50% !important',
    marginTop: '10px'
  },
  speechBubble: {
    width: '80%',
    padding: '5px',
    color: 'black',
    fontSize: '20px',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '10px',
    borderRadius: '10px',
    fontFamily: 'Caveat',
    border: '2px solid black'
  },
  deleteReviewBtn: {
    fontSize: '18px',
    color: 'black',
    '&:hover': {
      color: 'red'
    },

    paddingLeft: '0px'
  },
  actionIcons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  updateReviewBtn: {
    fontSize: '16px',
    color: 'black',
    '&:hover': {
      color: '#e57373'
    }
  }
}
export default styles
