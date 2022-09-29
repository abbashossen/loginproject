import { Component, Input, OnChanges, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnChanges {
  @Input() passwordToCheck: string;
    @Input() barLabel: string;
    bar0: string;
    bar1: string;
    bar2: string;
    bar3: string;
    bar4: string;
    private colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];

  constructor() { }


  // eslint-disable-next-line @typescript-eslint/member-ordering
  private static measureStrength(pass: string) {
    let score = 0;
    // award every unique letter until 5 repetitions
    // eslint-disable-next-line prefer-const
    let letters = {};
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i< pass.length; i++) {
    letters[pass[i]] = (letters[pass[i]] || 0) + 1;
    score += 5.0 / letters[pass[i]];
    }
    // bonus points for mixing it up
    // eslint-disable-next-line prefer-const
    let variations = {
    digits: /\d/.test(pass),
    lower: /[a-z]/.test(pass),
    upper: /[A-Z]/.test(pass),
    nonWords: /\W/.test(pass),
  };
    let variationCount = 0;
    // eslint-disable-next-line guard-for-in, prefer-const
    for (let check in variations) {
    variationCount += (variations[check]) ? 1 : 0;
  }
    score += (variationCount - 1) * 10;
    return Math.trunc(score);
  }

  private getColor(score: number) {
      let idx = 0;
      if (score > 90) {
        idx = 4;
      } else if (score > 70) {
        idx = 3;
      } else if (score >= 40) {
        idx = 2;
      } else if (score >= 20) {
        idx = 1;
      }
      return {
        idx: idx + 1,
    col: this.colors[idx]
      };
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering, @angular-eslint/use-lifecycle-interface
    ngOnChanges(changes: {[propName: string]: SimpleChange}): void {

            // eslint-disable-next-line no-var, @typescript-eslint/dot-notation
            var password = changes['passwordToCheck'].currentValue;
            this.setBarColors(5, '#DDD');
            if (password) {
                // eslint-disable-next-line prefer-const
                let c = this.getColor(DetailsPage.measureStrength(password));
                this.setBarColors(c.idx, c.col);
            }
        }
        private setBarColors(count, col) {
                // eslint-disable-next-line no-underscore-dangle
                for (let _n = 0; _n < count; _n++) {
                    this['bar' + _n] = col;
                }
            }
}
