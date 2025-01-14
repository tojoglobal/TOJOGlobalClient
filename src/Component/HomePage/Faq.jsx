import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "./../../AppContext";
import FaqItem from "../UniversalComponent/FaqItems/FaqItem";

const Faq = () => {
  const { apiUrl } = useContext(AppContext);

  // States
  const [errorMessage, setErrorMessage] = useState(null);
  const [faq, setFaq] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  // Fetch FAQ data
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/admin/faq`)
      .then((result) => {
        if (result.data.Status) {
          setFaq(result.data.Result);
        } else {
          setErrorMessage(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, [apiUrl]);

  // Toggle function
  const toggleFaq = (index) => {
    setOpenIndex(openIndex == index ? null : index);
  };

  return (
    <div className="faq_row_style" id="faq">
      <div className="container faq_container_style">
        <div className="col_text_style faqHeader_style_div">
          <h1 className="faq_headding_text">FAQ</h1>
          <strong className="faq_paratextStyle text-center">
            Ask Us Anything
          </strong>
        </div>
        <div className="faq_row_main_div">
          {(faq || []).map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggleFaq={toggleFaq}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
