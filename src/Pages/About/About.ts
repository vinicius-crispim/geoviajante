import styled from "styled-components";

export const AboutStyled = styled.div`
/* Article Container */

.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

/* Article Text */

.container p{
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.container p:last-child{
  text-align:center;
}

/* Responsive Design */

@media (max-width: 768px) {
 .container {
    max-width: 600px;
  }
}

@media (max-width: 480px) {
 .container {
    max-width: 400px;
  }
}
`