//  const Name = ({ name }:{name:string}) => {
type NameProps = {
  name: string;
  onChange?:React.ChangeEventHandler<HTMLInputElement>;
  greeting?:string;
};
// interface NameProps{
//   name: string;
//   onChange?:React.ChangeEventHandler<HTMLInputElement>
// };

const Name= ({ name ,onChange,greeting}:NameProps ) => {
  return (
    <div>
      <h1>Hello {greeting} My name is {name}</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" value={name} onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Name;