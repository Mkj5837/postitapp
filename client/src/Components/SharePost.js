import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
} from "reactstrap";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import {savePost} from "../Features/PostSlice";

const SharePosts = () => {

  //all the needed vars.
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const [postMsg, setpostMsg] = useState("");
  const email = useSelector((state) => state.users.user.email); 

  const handlePost = async () => {

    // Validate that postMsg is not empty.
    if (!postMsg.trim()) {
      alert("Post message is required."); // Display an alert or set an error state
      return; // Exit the function early if validation fails
    }

    const postData = {
      postMsg: postMsg,
      email: email,
    };

    dispatch(savePost(postData)); // Dispatch the savePost thunk from the Posts Slice.
    setpostMsg(""); // Clear the input field after posting.
    alert("Post shared successfully!");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Input
              id="share"
              name="share"
              placeholder="Share your thoughts..."
              type="textarea"
              value={postMsg}
              onChange={(e) => setpostMsg(e.target.value)}
            />

            <Button onClick={()=>{handlePost()}}>PostIT</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SharePosts;
