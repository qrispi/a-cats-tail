export default start = {
  catInfo: {
    name: '',
    img: '',
    morality: 0,
  },
  currentDay: 0,
  decisions: {
    day1: '',
    day2: '',
    day3: '',
    day4: '',
    day5: '',
    day6: '',
    day7: '',
  },
  bookmarks: [
    {id: 0, fact: ''}
  ],
  storyline: [
    {
      story: '',
      evilChoice: '',
      neutralChoice: '',
      goodChoice: '',
      evilReaction: '',
      neutralReaction: '',
      goodReaction: '',
    },
    // All 7 days populate here where index 0 is day 1, index 1 is day 2, etc.
  ]
}