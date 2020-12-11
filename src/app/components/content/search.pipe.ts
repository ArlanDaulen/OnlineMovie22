import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export  class SearchPipe implements PipeTransform{
  transform(movies, value){
    return movies.filter( movie => {
        return movie.name.includes(value);
      }
    )
  }

}
