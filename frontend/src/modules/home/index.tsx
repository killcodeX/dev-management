import Section1 from './section1/section1'
import Section2 from './section2'

export default function Home() {
  return (
    <div className="dashboard-home">
      <div className="container">
        <Section1/>
        <Section2/>
      </div>
    </div>
  );
}
