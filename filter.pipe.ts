import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterPipe"
})
export class FilterPipe implements PipeTransform {
  transform(value: string, matchValue: string) {
    if (!matchValue) {
      return value;
    }
    if (Array.isArray(value)) {
      let value1 = value.filter(x => x.includes(matchValue));
      return value1;
    }
  }
}
