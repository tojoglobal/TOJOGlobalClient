import PropTypes from "prop-types";
import { useContext } from "react";
import { AppContext } from "../../../AppContext";

const FaqItem = ({ question, answer, isOpen, toggleFaq, index }) => {
  const { isMobileView } = useContext(AppContext);
  return (
    <div
      className="faq-card-main"
      data-aos="fade-right"
      data-aos-delay={index * 200}
    >
      <div className="accordion_button_item_card">
        <div
          onClick={() => toggleFaq(index)}
          className="accordion_button_item_div"
        >
          <span className="accordion_button_text">{question}</span>

          <div className="accordion_button_item_card_image_div">
            {isMobileView ? (
              <img
                src="/Images/homePage/faqQuestionCardBGMobile.png"
                alt="faqQuestionCardMobile"
                className="accordion_button_item_card_image"
              />
            ) : (
              <img
                src="/Images/homePage/faqQuestionCardBG.svg"
                alt="faqQuestionCardBG.svg"
                className="accordion_button_item_card_image"
              />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <p className="accordion_answer_text sm:mt-2 text-sm">{answer}</p>
      )}
    </div>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleFaq: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default FaqItem;
