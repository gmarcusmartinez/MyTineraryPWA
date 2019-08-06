const styles = {
  reviewText: {
    fontFamily: 'Caveat',
    color: 'black',
    fontSize: '20px'
  },
  reviewCard: {
    height: '125px'
  },
  createReviewCard: {
    height: '125px'
  },
  deleteReviewBtn: {
    fontSize: '18px',
    color: 'black',
    position: 'absolute',
    top: '-20px',
    right: '-6px',
    '&:hover': {
      color: 'red'
    }
  },
  reviewImg: {
    width: '80% !important',
    borderRadius: '50% !important',
    marginInlineStart: '10%',
    marginTop: '25%',
    marginBottom: '25%'
  },
  updateReviewBtn: {
    fontSize: '16px',
    color: 'black',
    position: 'absolute',
    top: '10px',
    right: '38px',
    '&:hover': {
      color: '#e57373'
    }
  }
}
export default styles
