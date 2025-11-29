import { BlogPage } from '../../components/BlogPage.tsx';
import { Image } from '../../components/Image.tsx';

export default function Blog() {
  return (
    <BlogPage title='L`orso disegna'>
      <h2>Can I become an artist?</h2>
      <S>
        <P>
          In July of 2025 I had a heated discussion with a retired arts dealer. I asked my
          typical questions about "who decides what is art?" and "who desides how much an
          art piece costs?". The art dealer`s response was "I do that!"
        </P>

        <P>
          The answer provoked and frustrated me, so I thought I would give it a go.
        </P>

        <P>
          Around the same time, posts from the Portuguese artist Francisco Fonseca started
          appearing in my social feed, so I got inspired to try and paint houses. They are
          just a bunch of geometric shapes and lines with a lot of detail anyway - so how
          hard could it be.
        </P>
      </S>

      <S>
        <H4>23. august 2025 - first attempt</H4>
        <p>
          I had just bought a water color set and a few pens the day before, and thought I
          should give it a go. I had a picture I took from Mondovi, Piemonte earlier in
          the summer with lots of buildings on it. I got too impatient and wanted to see
          how it looked with colors, so I never got to finish it.
        </p>
        <I src='/paintings/first_attempt.jpg' />
      </S>

      <S>
        <H4>23. august 2025 - second attempt</H4>
        <p>
          Wanted to finish one, so I tested out painting a door from our village Perinaldo
          which I managed to finish. Tested out some shadows and splattering of paint.
          Perspective is totally off, but it just took a few minutes to do. I was hooked.
        </p>
        <I src='/paintings/door_perinaldo.jpg' />
      </S>

      <S>
        <H4>26. august 2025 - finishing the funicular in Mondovi</H4>
        <p>
          I had another attempt at the funicular in Mondovi with a focus on perspective. I
          did not think the houses looked as good this time, and I left too much ink on
          the paper. The perspective was also totally off in places. Very limited shadow
          work.
        </p>
        <I src='/paintings/mondovi.jpg' />
      </S>

      <S>
        <H4>27. august 2025 - painting our house</H4>
        <p>
          A nice late summer day and I thought I would have another go at perspective
          drawing. Got the wall, window and porch dialed in, but the stair case, wheel
          barrel and rake was off. I was very happy with the tree. Tried some more
          shading. Starting to look like illustrations in a childrens book.
        </p>
        <I src='/paintings/rotneim.jpg' />
      </S>

      <S>
        <H4>1. september 2025 - centro storico in Perinaldo</H4>
        <p>
          Off to Italy and Perinaldo. Our village has a ton of fantastic buildings and it
          should not be hard to find anything to paint. This is from the church piazza in
          centro storico. My first attempt at the typical italian building with green
          shutters and the ligurian color palette. Quite happy with the almost invisible
          shading and perspective that gave the building some depth.
        </p>
        <I src='/paintings/perinaldo_castello.jpg' />
      </S>

      <S>
        <H4>2. september 2025 - shit did I make this?!</H4>
        <p>
          This is the moment where I thought "shit, did I make this???" - perspective,
          light, shadow, cold, warm, buildings and a figure are in place. And this was the
          moment I understood how difficult painting people is. Your brain is so
          incredibly good at recognizing people, and if the proportions or the balance is
          just a tiny bit off, you will see the error immediately. The balance is off. I
          also used a white pen on top of the finished painting for highlights.
        </p>
        <I src='/paintings/last_bottle.jpg' />
      </S>

      <S>
        <H4>5. september 2025 - view from the bar</H4>
        <p>
          I wanted to test out a quick pen drawing without sketching with a pencil first.
          Perspective is totally off and I left too much ink on the paper, but it has some
          kind of naive quality to it anyway. It makes me happy looking at it. It is also
          the view from my bar.
        </p>
        <I src='/paintings/view_from_bar.jpg' />
      </S>
    </BlogPage>
  );
}

function S({ children }) {
  return <section className='leading-8 my-12'>{children}</section>;
}

function P({ children }) {
  return <p className='my-4'>{children}</p>;
}

function I({ src }) {
  return (
    <div className='p-2 my-4 max-w-2xl border-2 border-slate-500 shadow-lg'>
      <image className='' src={src} />
    </div>
  );
}

function H4({ children }) {
  return <h4 className='my-2 text-lg font-semibold'>{children}</h4>;
}
