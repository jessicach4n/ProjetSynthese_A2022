class Card {
    constructor(numberOfTotalLikes, numberOfSharedAnimations, numberOfTotalAnimations) {
      this.numberOfTotalLikes = numberOfTotalLikes;
      this.numberOfSharedAnimations = numberOfSharedAnimations;
      this.numberOfTotalAnimations = numberOfTotalAnimations
    }

    get numberOfTotalLikes(){
        return this.numberOfTotalLikes
    }

    get numberOfSharedAnimations(){
        return this.numberOfSharedAnimations
    }

    get numberOfTotalAnimations(){
        return this.numberOfTotalAnimations
    }

  }