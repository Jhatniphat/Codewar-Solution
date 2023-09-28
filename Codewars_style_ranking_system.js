class User {
    rank = -8;
    progress = 0;
    incProgress(kataRank){
        console.log(`this rank = ${this.rank}`)
        console.log(`this progress = ${this.progress}`)
        console.log(`katarank = ${kataRank}`)
        if(kataRank > 8 || kataRank < -8) throw Error;
        if(this.rank > 8 || this.rank < -8) throw Error;
        if(kataRank === 0 || this.rank === 0) throw Error;
        let diffRank;
        if( (kataRank > 0 && this.rank > 0 ) || (kataRank < 0 && this.rank < 0 )) diffRank = kataRank - this.rank
        else if (kataRank < 0 && this.rank > 0) diffRank = kataRank - ( this.rank - 1 )
        else if (kataRank > 0 && this.rank < 0) diffRank = ( kataRank - 1 ) - this.rank
        console.log(`diffRank = ${diffRank}`)
        switch(diffRank){
            case 0: //katarank == user.rank
                this.progress += 3
                break;
            case -1: //katarank < user.rank : 1
                this.progress += 1
                break;
            case -2: //katarank < user.rank : 2 
                break;
            default:
                this.progress += 10 * (diffRank*diffRank)
        }
    
        while(this.progress >= 100){
            if(this.rank === -1) this.rank = 1
            else if (this.rank === 8) {}
            else this.rank += 1
            this.progress -= 100
            console.log(`rank up to ${this.rank}`)
            console.log(`left ${this.progress}`)
        }
        console.log(`this rank = ${this.rank}`)
        console.log(`this progress = ${this.progress}`)
        console.log('--------------------------------')
        if(this.rank === 8 && this.progress > 0) this.progress = 0
    }
  }
 
let user1 = new User()
user1.incProgress(-7)
