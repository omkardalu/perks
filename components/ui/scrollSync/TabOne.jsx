"use client";

import { useEffect, useRef } from "react";

const TabOne = ({ currentScrollTop, setcurrentScrollTop }) => {
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
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae voluptas
      dolore quos omnis, cum commodi modi dignissimos ratione placeat dolorum
      culpa inventore! Ipsa accusantium atque delectus! Ut itaque quisquam quos
      natus accusantium ad ducimus, veritatis harum culpa eaque ex optio,
      cupiditate tempore libero. Quas alias, distinctio omnis quos vitae qui quo
      neque architecto consequatur officia accusantium dignissimos. Ea unde odit
      consectetur et, ut illo maiores dolorem aut minus velit? Labore, aut non.
      Aut nostrum modi, quibusdam aspernatur dolorum, provident enim adipisci
      eaque perspiciatis aliquam omnis rem nulla sint repellat est fugiat. Nihil
      rerum at, non alias ullam officiis aliquam consectetur placeat nam
      deleniti recusandae ad suscipit inventore ducimus animi, odit perspiciatis
      magnam eveniet voluptates? Eos assumenda laudantium, distinctio error
      soluta laboriosam quia harum neque et. Deserunt ad ipsum nemo minima
      assumenda eligendi inventore similique optio, repudiandae expedita magni,
      quaerat numquam velit culpa labore aliquam. Distinctio optio ullam modi
      dolorem, non explicabo, esse fugiat error beatae eos praesentium quasi
      vero harum! Deleniti voluptatum commodi reiciendis quasi voluptatem
      accusantium amet dolores sit ea molestiae voluptas quod fuga, obcaecati
      numquam tempore aut? Voluptas reiciendis maiores iusto sunt! Nulla earum
      illum nihil non molestiae expedita maxime autem, quis accusamus similique
      sint reiciendis ipsa repudiandae accusantium facilis quasi totam
      praesentium culpa esse at cum mollitia? Maxime unde error harum officiis
      aliquid, iusto quisquam omnis? Neque pariatur aspernatur doloremque
      impedit sunt! Beatae dicta cum ab quo alias quaerat, illo corporis
      provident error molestiae? Vero minus ipsa eligendi, optio a tenetur
      veritatis incidunt deleniti natus architecto esse quod, mollitia
      temporibus dolore perspiciatis, minima eius ea! Numquam eos aspernatur
      nemo, quam tempora eligendi non cupiditate, optio placeat rem ad deleniti.
      Illum asperiores maiores odit molestiae eligendi! Sit ipsam, animi quo
      aspernatur modi excepturi voluptates. Alias commodi at distinctio error
      aut nulla quidem ullam, numquam id ipsam impedit ipsum fugit, voluptas
      porro odio magni voluptatum, animi rem vero sunt? Repellat maxime facere
      quia eligendi porro consequatur deserunt eos assumenda sed. Impedit
      dolorum mollitia nihil voluptatem doloremque suscipit accusamus debitis
      recusandae atque dignissimos! Alias possimus dignissimos sit at
      exercitationem beatae, nihil esse illum voluptatum officiis ab nobis quis
      inventore maiores? Minus nesciunt velit mollitia quibusdam eveniet numquam
      beatae adipisci explicabo voluptatibus, deserunt odit quo aliquid totam
      officia? Deserunt, soluta illum? Ducimus, hic odit? Corporis amet sequi
      error fugiat commodi? Magnam eum amet similique quia velit voluptate dolor
      sequi expedita consequuntur facilis officiis optio officia, cumque
      repellendus minus beatae quibusdam deserunt cupiditate. Hic possimus
      voluptas facilis a optio alias numquam voluptatum accusamus esse sunt.
      Autem dignissimos eos exercitationem nulla facilis delectus perferendis
      minus voluptatem libero harum officiis est non laborum quae, nam
      distinctio velit repellendus obcaecati aliquam, aliquid consequatur. Iure
      quae dignissimos fugiat esse impedit debitis voluptatem eius ea adipisci
      tempore, veniam reprehenderit. Atque enim, obcaecati fugiat, totam quia
      nam, nobis provident libero voluptate molestias eaque dolorem adipisci
      voluptatum distinctio iste culpa? Temporibus corporis magni natus maiores
      quae nostrum fugiat in praesentium laborum aspernatur eligendi culpa quod
      sit quas ipsam dolorem hic tenetur officiis corrupti vitae, error tempore
      libero? Libero, eius!
    </div>
  );
};

export default TabOne;
