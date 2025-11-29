import { BlogPage } from '../../components/BlogPage.tsx';

export default function Blog() {
  return (
    <BlogPage title='L`orso disegna'>
      <H1>Can I become an artist?</H1>
      <S>
        <P>
          In July of 2025 I had a heated discussion with a retired arts dealer. I asked my
          typical questions about "who decides what is art?" and "who decides how much an
          art piece costs?". The art dealer`s response was "I do that!"
        </P>

        <P>
          The answer provoked and frustrated me.
        </P>
      </S>

      <S>
        <H2>August - October, 2025</H2>
        <P>
          Buildings, perspective, details, shadow and light.
        </P>

        <div className='grid grid-cols-3 gap-2 w-full max-w-3xl mt-4 mb-12'>
          <T src='/paintings/first_attempt.jpg' />
          <T src='/paintings/mondovi.jpg' />
          <T src='/paintings/rotneim.jpg' />
          <T src='/paintings/perinaldo_castello.jpg' />
          <T src='/paintings/last_bottle.jpg' />
          <T src='/paintings/kranj.jpg' />
          <T src='/paintings/wall_structure.jpg' />
          <T src='/paintings/leaf.jpg' />
          <T src='/paintings/bike.jpg' />
        </div>

        <H3>23. august 2025 - first attempt</H3>
        <p>
          After thinking about this painting thing for a few weeks, and seeing my
          girlfriend draw a little, I thought I would give it a go. Around the same time,
          posts from the Portuguese artist{' '}
          <a href='https://www.instagram.com/_francis.co/'>Francisco Fonseca</a>{' '}
          started appearing in my social feed, and I got inspired by his paintings of old
          buildings. I bought a water color set and a few pens and I had a picture I took
          from Mondovi in Piemonte earlier in the summer with lots of buildings on it.
          During the process, I got too impatient and wanted to see how it looked with
          colors, so I never got to finish it. But I liked the style.
        </p>
        <I src='/paintings/first_attempt.jpg' />
      </S>

      <S>
        <H3>23. august 2025 - second attempt</H3>
        <p>
          Wanted to finish one, so I tested out painting a door from our village Perinaldo
          which I managed to finish. Tested out some shadows and splattering of paint.
          Perspective is totally off, but it just took a few minutes to do. I was hooked.
        </p>
        <I src='/paintings/door_perinaldo.jpg' />
      </S>

      <S>
        <H3>26. august 2025 - finishing the funicular in Mondovi</H3>
        <p>
          I had another attempt at the funicular in Mondovi with a focus on perspective. I
          did not think the houses looked as good this time, and I left too much ink on
          the paper. The perspective was also totally off in places. Very limited shadow
          work.
        </p>
        <I src='/paintings/mondovi.jpg' />
      </S>

      <S>
        <H3>27. august 2025 - painting our house</H3>
        <p>
          A nice late summer day and I thought I would have another go at perspective
          drawing. Got the wall, window and porch dialed in, but the stair case, wheel
          barrel and rake was off. I was very happy with the tree. Tried some more
          shading. Starting to look like illustrations in a childrens book.
        </p>
        <I src='/paintings/rotneim.jpg' />
      </S>

      <S>
        <H3>1. september 2025 - centro storico in Perinaldo</H3>
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
        <H3>2. september 2025 - shit did I make this?!</H3>
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
        <H3>5. september 2025 - view from the bar</H3>
        <p>
          I wanted to test out a quick pen drawing without sketching with a pencil first.
          Perspective is totally off and I left too much ink on the paper, but it has some
          kind of naive quality to it anyway. It makes me happy looking at it. It is also
          the view from my bar.
        </p>
        <I src='/paintings/view_from_bar.jpg' />
      </S>

      <S>
        <H3>6. september 2025 - perspectives gotten right</H3>
        <p>
          After messing up the perspectives in the drawing the day before, I thought I
          would try and do it properly. I sat in place and made a pencil sketch. Took a
          picture, and went home to finish it. Very happy with the perspective and the
          shadows in the windows, but the other shadows I messed up.
        </p>
        <I src='/paintings/perinaldo_entrance.jpg' />
        <div className='flex max-w-2xl justify-around'>
          <image
            className='w-3/12 rounded shadow'
            src='/paintings/perinaldo_entrance_1.jpg'
          />
          <image
            className='w-3/12 rounded shadow'
            src='/paintings/perinaldo_entrance_2.jpg'
          />
          <image
            className='w-3/12 rounded shadow'
            src='/paintings/perinaldo_entrance_3.jpg'
          />
        </div>
      </S>

      <S>
        <H3>10. september 2025 - a more cartoony style with perspectives off</H3>
        <p>
          I wanted to test out painting a building in a little more cartoonish style with
          the perspectives deliberately a little bit off. I was very happy with this, but
          the coloring is not too good - you can clearly see the brush strokes. I would
          like it to be a little more random.
        </p>
        <I src='/paintings/cartoon_style.jpg' />
      </S>

      <S>
        <H3>17. september 2025 - messing up light and shadow</H3>
        <p>
          This scene had such great light, shadow and colors, but I totally missed the
          mark on this one. I also need to learn how to paint plants. But the coloring of
          the walls was not too bad.
        </p>
        <I src='/paintings/messing_up_light.jpg' />
      </S>

      <S>
        <H3>22. september 2025 - roof tiles, people, shadows and reflections</H3>
        <p>
          Allright! I was super happy with this one. I got the shadows more or less
          correct, painted roof tiles for an hour (crap, a lot), got the human figures
          placed into the correct perspective with ok balance and proportions. The ground
          was wet, and I tried to paint reflections onto the ground - not too bad. I also
          used a white marker for highlights and reflections. The bike was off - have to
          get back to that.
        </p>
        <I src='/paintings/kranj.jpg' />
      </S>

      <S>
        <H3>28. september 2025 - more perspectives and structure on walls</H3>
        <p>
          Wanted to see if I could make the walls of buildings look more organic with some
          structure. Quite happy with the walls, the perspective of the staircase, and the
          shadows on the shutters and the green door. But again put too much ink on the
          page. I need to get a thinner pen, a brown one.
        </p>
        <I src='/paintings/wall_structure.jpg' />
      </S>

      <S>
        <H3>7. october 2025 - bigger format and more details</H3>
        <p>
          Moving away from my sketchbook I wanted to check out bigger formats and more
          details. This is an unfinished sketch of the old town of Menton, France. Quite
          happy with the level of details and the perspective.
        </p>
        <I src='/paintings/menton.jpg' />
      </S>

      <S>
        <H3>8. october 2025 - coloring was a mistake</H3>
        <p>
          I added a missing piece and a couple of trees in the top right corner and was
          very happy with the trees (I can do trees now). However, painting the scene was
          a total mistake. It looked a lot better as a black and white pen drawing.
        </p>
        <I src='/paintings/menton_colors.jpg' />
      </S>

      <S>
        <H3>9. october 2025 - painting a leaf in 30 minutes</H3>
        <p>
          After spending several days with all those details from Menton, and not being
          happy after coloring it, I picked up a leaf from the street and painted it.
          Added a shadow for more depth. It took about 30 minutes. Again I thought "did I
          make this???"
        </p>
        <I src='/paintings/leaf.jpg' />
      </S>

      <S>
        <H3>12. october 2025 - messing up light and shadow again!</H3>
        <p>
          Inspired by the leaf painting a few days earlier and the amazing autumn colors,
          I wanted to have another go at trying to capture light and shadow. And I totally
          messed it up again. Yuk! But I liked the tree.
        </p>
        <I src='/paintings/sanromolo.jpg' />
      </S>

      <S>
        <H3>23. october 2025 - and there was finally light and shadow</H3>
        <p>
          A few days earlier I took my mountain bike to the woods between San Romolo and
          Bajardo. The forest road was just filled with leafs and the light was amazing. I
          took a photo of my bike and thought I could have another go at capturing the
          light. This time it worked. Super happy! The bike also looked ok. And oh, do you
          see the small shadow underneath the wheels? Without those tiny shadows, the bike
          was floating in the air. You can`t fool the brain.
        </p>
        <I src='/paintings/bike.jpg' />
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

function T({ src }) {
  return (
    <div className='aspect-square shadow-slate-500 rounded shadow-md'>
      <image className='w-full h-full object-cover' src={src} />
    </div>
  );
}

function H1({ children }) {
  return <h1 className='my-3 text-3xl'>{children}</h1>;
}
function H2({ children }) {
  return <h2 className='my-3 text-xl md:text-2xl'>{children}</h2>;
}

function H3({ children }) {
  return <h3 className='my-2 text-base md:text-lg font-semibold'>{children}</h3>;
}
