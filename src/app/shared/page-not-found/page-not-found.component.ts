import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'st-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  listOfQuotes: string[] = [
    '"Everybody does have a book in them, but in most cases that\'s where it should stay." -CHRISTOPHER HITCHENS',
    '"Human decency is not derived from religion. It precedes it." -CHRISTOPHER HITCHENS',
    '"The essence of the independent mind lies not in what it thinks, but in how it thinks." -CHRISTOPHER HITCHENS',
    '"I would love to believe that when I die I will live again, that some thinking, feeling, remembering part of me will continue. But as much as I want to believe that, and despite the ancient and worldwide cultural traditions that assert an afterlife, I know of nothing to suggest that it is more than wishful thinking." -CARL SAGAN',
    '"When men stop believing in God, it isn\'t that they then believe in nothing: they believe in everything." -UMBERTO ECO',
    '"All children are Atheists; they have no idea of God." -PAUL-HENRI HOLBACH',
    '"Religion has actually convinced people that there\'s an invisible man living in the sky who watches everything you do, every minute of every day. And the invisible man has a special list of ten things he does not want you to do. And if you do any of these ten things, he has a special place, full of fire and smoke and burning and torture and anguish, where he will send you to live and suffer and burn and choke and scream and cry forever and ever \'til the end of time!... But He loves you!" -GEORGE CARLIN',
    '"Is man merely a mistake of God\'s? Or God merely a mistake of man?" -FRIEDRICH NIETZSCHE',
    '"We are all atheists about most of the gods that societies have ever believed in. Some of us just go one god further." -RICHARD DAWKINS',
    '"It is not hardness of heart or evil passions that drive certain individuals to atheism, but rather a scrupulous intellectual honesty." -STEVE ALLEN',
    "\"I'm an atheist, and that's it. I believe there's nothing we can know except that we should be kind to each other and do what we can for other people.\" -KATHARINE HEPBURN",
    '"The legitimate powers of government extend to only such acts as are injurious to others. But it does me no injury for my neighbor to say that there are twenty gods, or no God." -THOMAS JEFFERSON',
    "\"You don't have to be brave or a saint, a martyr, or even very smart to be an atheist. All you have to be able to say is 'I don't know'.\" -PENN JILLETTE",
    '"Atheism is a non-prophet organization." -GEORGE CARLIN'
  ];

  quote: string;

  @HostBinding('class.flex-full-height')
  ngOnInit(): void {
    const randomIndex = Math.floor(Math.random() * this.listOfQuotes.length);
    this.quote = this.listOfQuotes[randomIndex];
  }
}
