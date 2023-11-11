import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maiores
      repudiandae architecto, magnam nisi sed doloremque veritatis ipsum
      nesciunt libero harum officiis dicta! Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Quaerat sint, distinctio non sed doloremque
      voluptatem officiis dignissimos labore praesentium saepe nostrum aut
      rerum, blanditiis veritatis, consequatur mollitia? A sunt ipsam in
      quaerat, nobis nam! Ab possimus rem illum a exercitationem. Ab nisi fugit
      rem, quam quibusdam suscipit officiis incidunt illo nihil perferendis amet
      quos natus, magni a itaque nobis odio consectetur commodi quisquam
      voluptate ex quod doloremque quis. Qui quas praesentium aspernatur maxime
      asperiores ipsum, pariatur ut. Temporibus quisquam quis similique officiis
      voluptas provident, minima repudiandae? Dolorum, delectus, commodi eveniet
      doloribus sed iusto dolores repellendus quasi, quis distinctio minus
      doloremque iure. Fugiat iure modi ratione tempora voluptates explicabo
      odit exercitationem, odio optio vitae earum, facere quo sint quam
      reprehenderit, repellat autem enim? Voluptatum.
      <Link to="/mobile">
        {" "}
        <button className="btn btn-primary">Contact us</button>
      </Link>
    </div>
  );
}

export default Home;
