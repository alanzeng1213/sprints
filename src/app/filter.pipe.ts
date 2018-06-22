import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: any, term: any): any {
    // check if search term is undefined
    if (term === undefined) {
      return posts;
    }

    return posts.filter(function(pp) {
      return pp.length.toLowerCase().includes(term.toLowerCase())
       || pp.status.toLowerCase().includes(term.toLowerCase())
       || pp.data.toLowerCase().includes(term.toLowerCase())
       || pp.description.toLowerCase().includes(term.toLowerCase());

    });
  }

}
