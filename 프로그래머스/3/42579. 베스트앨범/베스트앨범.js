function solution(genres, plays) {
    var answer = [];
    var songMap = new Map();
    // const mergedArray = genres.map((genre,index)=>[genre,plays[index]]);
    // console.log(mergedArray);
    
    genres.forEach((genre,index)=>{
        if(!songMap.has(genre)){
            songMap.set(genre,[]);
        }
        songMap.get(genre).push({play:plays[index],index});
    })
    
    // play 수가 많은 순으로 정렬
    // 장르 내 어떤 인덱스가 가장 많은 노래를 가지고 있는지 확인
    songMap.forEach((songs,genre)=>{
        songs.sort((a,b)=>b.play-a.play);
    })
    
    // 어떤 장르가 가장 많은 노래를 가지고 있는지 확인
    const genrePlaySum = Array.from(songMap.entries())
      .map(([genre, songs]) => ({
        genre,  
        totalPlay: songs.reduce((sum, song) => sum + song.play, 0),
        songs,
      })).sort((a, b) => b.totalPlay - a.totalPlay); 

    console.log(genrePlaySum);

    // 상위 2곡 추출
    genrePlaySum.forEach(({ genre, songs }) => {
      songs.slice(0, 2).forEach(song => answer.push(song.index));
    });
    
    return answer;
}