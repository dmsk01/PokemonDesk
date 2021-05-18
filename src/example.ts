// Primitive types

function concat(base: string, addition: string): string {
  return base + addition;
}

concat('Hello', 'world');

// Interfaces

type strOrNum = string | number;

interface WithData {
  [key: string]: string | strOrNum[];
}
interface MyHomeTask {
  howIDoIt: string;
  simeArray: strOrNum[];
  withData: WithData[];
}

const myHometask: MyHomeTask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

myHometask.howIDoIt = 'eslint rygalsya ochen';

// Function types using Generic

interface MyArray<T> {
  [N: number]: T;

  reduce<U>(callbackfn: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U, initValue: U): U;
}

const myArray: MyArray<number> = [1, 2, 3];

myArray.reduce((acc: number, cur: number) => acc + cur, 0);

// interface IPokemonCardProps {
//   name: string;
//   attack: number | string;
//   defence: number | string;
//   img: string;
//   type: (number | string)[];
// }

// const PokemonCard: React.FC<IPokemonCardProps> = ({ name, attack, defence, img, type }: IPokemonCardProps) => {
//   return (
//     <div className={s.root}>
//       <div className={s.infoWrap}>
//         <Heading tag="h3" size="24px" className={s.titleName}>
//           Charmander
//         </Heading>
//         <div className={s.statWrap}>
//           <div className={s.statItem}>
//             <div className={s.statValue}>52</div>
//             Attack
//           </div>
//           <div className={s.statItem}>
//             <div className={s.statValue}>43</div>
//             Defense
//           </div>
//         </div>
//         <div className={s.labelWrap}>
//           <span className={s.label}>Fire</span>
//         </div>
//       </div>
//       <div className={s.pictureWrap}>
//         <img
//           src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
//           alt="Charmander"
//         />
//       </div>
//     </div>
//   );
// };

{
  /* {pokemons.map(({ name, stats, types, img, id }) => (
          <PokemonCard key={id} name={name} attack={stats.attack} defense={stats.defense} img={img} type={types} />
        ))} */
}
