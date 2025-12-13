import { BlogPage } from '../../../components/BlogPage.tsx';

export default function Blog() {
  return (
    <BlogPage title='L`orso disegna' href='/blog/painting'>
      <S>
        <H2>November - December, 2025</H2>
        <P>
          Attempting to paint and draw people and portraits.
        </P>

        <div className='grid grid-cols-3 gap-2 w-full max-w-3xl mt-4 mb-12'>
          <T src='/paintings/stian_fast.jpg' />
          <T src='/paintings/sjur_mechanic.jpg' />
          <T src='/paintings/sjur.jpg' />
          <T src='/paintings/opera.jpg' />
          <T src='/paintings/summer.jpg' />
          <T src='/paintings/selfie.jpg' />
          <T src='/paintings/stian.jpg' />
          <T src='/paintings/bassista.jpg' />
          <T src='/paintings/sketch.jpg' />
        </div>
      </S>

      <S>
        <H3>1. november 2025 - quick test</H3>
        <p>
          Sitting on the ferry from Denmark to Norway with my sketch book and my alcohol
          markers I made a quick attempt at a portrait. I made a quick sketch with a
          pencil, then added the shadows gradually from light to dark. Then erased the
          pencil in the end - to quickly learn that it was impossible where I had actually
          used the alcohol markers. The resulting portrait did not resemble the person at
          all, but at least it looked like a person with somewhat correct proportions.
        </p>
        <I src='/paintings/stian_fast.jpg' />
      </S>

      <S>
        <H3>7. november 2025 - dirty mechanic</H3>
        <p>
          I had a black and white photo of a friend from back in the days after he had
          been working on my old car. I really like the photo and I wanted to try and draw
          it using my alchohol markers. I am very satisfied with the t-shirt and the
          fingers. But I totally missed the portrait likeness for the face. The head is a
          little too small and the eyes too large. And there is something wrong with the
          nose. But the balance of the figure looks realistic. The superman symbol turned
          out very nice. The oil smudges on the arm and fingers were added with water
          color at the end. Two dots with a white pen for the eyes.
        </p>
        <I src='/paintings/sjur_mechanic.jpg' />
      </S>

      <S>
        <H3>11. november 2025 - portrait likeness</H3>
        <p>
          Not giving up at portrait likeness I had another go at the same person. This
          time in color with pen and watercolor. I am very happy with the shadows of the
          face and the intensity of the eyes. I understood the values of the colors are
          more important than the actual colors. The shirt also turned out ok. The beard -
          not so much. But I like the picture.
        </p>
        <I src='/paintings/sjur.jpg' />
      </S>

      <S>
        <H3>14. november 2025 - doom, gloom and some hope</H3>
        <p>
          This is a scene from the roof of the Opera in Oslo. My plan was to try and make
          a dark and gloomy image in black and white with a small colored figure of hope
          looking into the sky. The person has the right proportions and balance. Some
          even said it looked like my girlfriend (which it is). I made an attempt at
          adding something that would resemble a scull in the top right corner. Quite
          happy with the result of gloom and doom in the painting. Pen and water colors.
        </p>
        <I src='/paintings/opera.jpg' />
      </S>

      <S>
        <H3>21. november 2025 - brush pen</H3>
        <p>
          This picture started as a charcoal drawing, and the plan was to use a brush pen
          to make thin and thick strokes in one direction only to make light and shadow.
          Then erase the charcoal in the end. It turned out it was so difficult to control
          the brush tip that I more or less gave up that project. It ended up with short
          and messy brush strokes instead. The head is supposed to be totally in the
          shadow, but it just ended up looking strange. The breast is out of proportions,
          and it looks like one is missing. But I like the nipple :)
        </p>
        <I src='/paintings/summer.jpg' />
      </S>

      <S>
        <H3>24. november 2025 - selfie</H3>
        <p>
          Time for a selfie :) I am super happy with this one. The likeness is good -
          well, at least how I looked back in 2012. It is based on a selfie I made after a
          very cold and dirty bike ride, hence the expression. Very happy with the nose,
          eyes, beard, and hair. Tried to make some smudges where the shadows go. Brown
          pencil.
        </p>
        <I src='/paintings/selfie.jpg' />
      </S>

      <S>
        <H3>27. november 2025 - first attempt made proper</H3>
        <p>
          I wanted to try a proper attempt at the quick portrait I made four weeks
          earlier. Very happy with this. The likeness is very good, and I just love how
          the glasses turned out. I was afraid I would mess up the hair (with alcohol
          markers you can not fix mistakes very easily) and have it not look blond, but it
          ended up nice and fluffy. The shadows under the nose and chin also worked out. I
          dade a couple of mistakes but you have to look for them yourself. Pencil and
          alcohol markers with a dash of white marker at the end (glasses and shirt
          button).
        </p>
        <I src='/paintings/stian.jpg' />
      </S>

      <S>
        <H3>4. december 2025 - il bassista</H3>
        <p>
          I had a picture of a friend playing a fretless bass. The positure was quite
          complex, but I wanted to have a go. I sketched it out with a pencil to get the
          proportions and balance correct, followed loosely with a pen for a more organic
          and messy look. I erased the pencil, and then colored it with water colors. I
          used two pens, one of them was not water proof, so the pen started bleeding
          around the face and he turned green. Note to self: check if the pen is water
          proof first. I messed up the glasses, but there is absolutely some portrait
          likeness there. Very happy with the shadows of the crinkles and folds of the
          pants and shirt. Fingers also turned out nice, except that he got green fingers.
          I like the shoes. The bass might look small, but it was a hand-built small bass.
        </p>
        <I src='/paintings/bassista.jpg' />
      </S>

      <S>
        <H3>Practice</H3>
        <p>
          Sometimes I try out ideas in my small sketch pad and practice painting people
          figures. In the first attempt on the left I totally messed up the human figure
          so I had another go only at the person. This time it worked well. Good
          proportions, balance, and shadow/reflections.
        </p>
        <I src='/paintings/sketch.jpg' />
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
