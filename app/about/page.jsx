import { getLastPost } from "../../lib/api";
import PostList from "../../components/PostList";
import variables from '../variables.module.scss';

async function About() {
  const posts = await getLastPost()

  return (
    <>
      <div>
        <h1 style={{ color: variables.primaryColor }} className={variables.primaryColor}>About US</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore omnis saepe, dignissimos nihil iste maxime ipsa nobis error? Quod nam repudiandae, sit, excepturi quisquam distinctio odit beatae doloribus illum veniam velit natus, sed architecto sint eius voluptates voluptate! Ipsum beatae consequuntur optio mollitia. Commodi unde harum, fuga ipsum beatae, voluptatum aliquam minus minima cumque nemo tenetur neque amet sapiente saepe similique sunt. Minima, non. Architecto excepturi delectus ducimus ipsam asperiores veniam maiores! Quas accusantium vel cum necessitatibus. Laudantium corporis cupiditate autem vel eveniet sunt dolor laboriosam fugit aliquid. Dolorum dolores, ducimus, distinctio corrupti totam delectus minima eum fuga natus, ut aut. Ea voluptate nobis hic doloribus, ipsum cumque nemo et accusamus architecto natus exercitationem aut alias deserunt cum molestias temporibus nulla reprehenderit dolorem voluptatibus totam quisquam? Quibusdam ut incidunt corporis recusandae dolorem aperiam laborum est ipsa veniam illum perspiciatis, in hic voluptatem necessitatibus pariatur obcaecati beatae, veritatis ipsam sapiente. Tempore nobis unde accusantium nesciunt libero dolor non culpa sequi corporis deserunt quis nihil quisquam, similique perspiciatis odit doloribus debitis nulla, in inventore enim dignissimos. Voluptates voluptatum harum rem. Sunt sequi dolor reprehenderit nesciunt, harum consectetur! Tempora temporibus repellendus sit tempore architecto iusto amet aperiam, similique dolorem non. Qui voluptate deleniti non expedita, vitae omnis inventore obcaecati natus! Sint, provident. Impedit doloremque, fugit saepe veritatis, dolores amet, sequi rem fugiat blanditiis magni voluptatem ab a? Similique iusto obcaecati eum tenetur voluptatem odit tempore labore praesentium officiis alias eos deleniti temporibus animi ad hic dignissimos, ut rerum facere impedit perferendis necessitatibus accusamus corrupti minima? Expedita aliquam autem ut natus. Laudantium, ipsam reprehenderit? Facere odio corporis dolorem tenetur aspernatur perferendis recusandae excepturi laudantium a. Et sint est perspiciatis nam incidunt! Libero, placeat omnis est similique officiis delectus tempora dolore consequatur ipsam unde praesentium deserunt magni vel! Magnam, at excepturi corrupti velit officia deserunt.</p>
      </div>
      <PostList posts={posts} />
    </>
  )
}

export default About;

