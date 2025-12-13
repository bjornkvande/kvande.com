import { BlogPage } from '../../../components/BlogPage.tsx';

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
        <H2>November - December, 2025</H2>
        <P>
          <a href='painting/2025-nov-dec'>
            Attempting to paint and draw people and portraits.
          </a>
        </P>

        <a href='painting/2025-nov-dec'>
          <div className='grid grid-cols-3 gap-2 w-full max-w-3xl mt-4 mb-12'>
            <T src='/paintings/stian_fast.jpg' />
            <T src='/paintings/sjur_mechanic.jpg' />
            <T src='/paintings/sjur.jpg' />
            <T src='/paintings/opera.jpg' />
            <T src='/paintings/summer.jpg' />
            <T src='/paintings/selfie.jpg' />
            <T src='/paintings/stian.jpg' />
            <T src='/paintings/bassista.jpg' />
          </div>
        </a>
      </S>

      <S>
        <H2>August - October, 2025</H2>
        <P>
          <a href='painting/2025-aug-oct'>
            Buildings, perspective, details, shadow and light.
          </a>
        </P>

        <a href='painting/2025-aug-oct'>
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
        </a>
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
