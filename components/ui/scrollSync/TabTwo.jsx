"use client";

import { useEffect, useRef } from "react";

const TabTwo = ({ currentScrollTop, setcurrentScrollTop }) => {
  const containerRef = useRef();

  useEffect(() => {
    containerRef.current.scrollTop = currentScrollTop;
  }, [currentScrollTop]);

  const handleScroll = (e) => {
    setcurrentScrollTop(e.target.scrollTop);
  };

  return (
    <div
      className="p-4 overflow-y-scroll bg-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.08),0_10px_20px_rgba(0,0,0,0.12)]"
      ref={containerRef}
      onScroll={handleScroll}
    >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum nobis
      pariatur ipsam explicabo! Eaque, ullam! Veritatis mollitia culpa et minus
      beatae consequatur quibusdam ullam ex, quo facere recusandae rem
      doloribus, doloremque iste voluptas aperiam, accusamus sequi laudantium
      minima qui id assumenda! Totam officia ex magni quod, vitae voluptate
      quasi vel id molestias atque vero corporis facilis? Optio nam repellendus
      sint animi numquam, dolor rerum laborum? Adipisci cum delectus rem nobis
      placeat, exercitationem qui reprehenderit dicta. Dolor numquam voluptas in
      ducimus qui tenetur odio quod iusto alias? Eius animi at amet in
      voluptatum deserunt! Quidem commodi aperiam magni, quod eos libero.
      Quibusdam aliquam in voluptate alias reprehenderit sunt dolores laborum
      nostrum iusto corporis illum minus quae et delectus, doloribus ducimus!
      Quos nostrum quaerat deserunt itaque. Modi, voluptas alias doloremque
      dolor laborum ratione ipsa similique? Expedita omnis atque porro quaerat,
      quas nihil deserunt quos? Cupiditate ex veritatis repellat minima iste est
      magnam voluptates neque corporis sint, at ipsum repudiandae quae fugiat
      eum, doloremque id amet molestiae accusamus esse molestias voluptatibus
      provident. Veritatis quod a ipsam ad sunt quas doloribus explicabo veniam
      amet hic ratione magni nesciunt illum possimus, ex repellendus fugit minus
      nisi officia est commodi facilis, quidem porro sit. Accusantium, quod
      beatae. Temporibus odit architecto voluptas. Facilis nam expedita beatae
      delectus atque, omnis recusandae consequuntur, tempora odio aut quae rem
      fugit. Dolores, esse. Ullam autem voluptatum minima consequatur accusamus
      vero sint omnis ipsa temporibus in. Accusamus modi nostrum, quasi
      dignissimos ex commodi corporis saepe voluptatum soluta dicta nobis
      recusandae, necessitatibus facilis cum? Doloribus, beatae blanditiis
      deleniti at inventore id voluptates maiores tempore obcaecati sequi
      doloremque ut molestiae culpa animi, officiis debitis cupiditate autem
      magnam et reiciendis esse? Ratione sapiente, libero voluptatibus est
      similique ducimus alias laudantium labore excepturi maiores cumque ullam!
      Provident optio pariatur aperiam aut. Iure distinctio quod sit omnis
      minima cupiditate architecto nisi mollitia magni. Eum accusantium fugiat
      inventore perferendis, voluptas esse dolores exercitationem molestiae
      dignissimos distinctio beatae maxime natus officiis, dolore repellendus?
      Consectetur, quo, tempore nobis modi exercitationem maiores facere
      recusandae voluptatem earum velit vel, blanditiis voluptas eaque vitae
      placeat tempora expedita nemo laboriosam qui! Asperiores adipisci itaque
      rem est nulla quibusdam! Laudantium nisi laborum nulla, sit ex
      exercitationem! Minus sequi dolores ut ipsam quam iure harum temporibus
      distinctio possimus doloribus aspernatur itaque optio, quas molestias
      laboriosam omnis voluptatibus dolorem, hic, quis dignissimos quos tempore
      nemo. Commodi similique quasi animi sapiente voluptatum voluptatem
      aspernatur, minus omnis iste modi in sequi, nemo doloremque vitae nobis
      error! Aliquam dolores ab laudantium, quo, exercitationem ex id eos, sint
      doloribus odio provident dignissimos? Recusandae voluptatibus
      reprehenderit, itaque hic, unde quidem sapiente qui eligendi, dolores
      ipsum ipsa porro. Atque doloribus cum ab neque temporibus quaerat,
      nesciunt consequuntur consectetur vitae tempore, nulla id maxime animi
      necessitatibus natus. Cupiditate, labore consequatur? Esse doloremque
      obcaecati eveniet, natus corrupti beatae. Tenetur voluptatum perferendis
      ipsam iste eius voluptate magni esse non optio delectus iusto tempora
      ratione repudiandae qui ullam nam similique et, consequuntur ut nisi
      soluta! Facilis minus ipsam aspernatur earum laboriosam animi illum quas
      cum quisquam dolores.
    </div>
  );
};

export default TabTwo;
