import React, { createElement, useState } from "react";
import { Button, Comment, Form, Input, List, Avatar } from "antd";
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import ReactPaginate from "react-paginate";
import moment from "moment";

import docimg from "../Assets/img/pngs/doctor1.jpg";

const { TextArea } = Input;

const CommentList = ({ comments, actions }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${
      comments.length > 1 ? "Comments" : "Comment"
    }`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment actions={actions} {...props} />}
  />
);
const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

export const Comments = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");


  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };
  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };
  const actions = [
    <span onClick={like}>
      {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
      <span className="comment-action">{likes}</span>
    </span>,
    <span onClick={dislike}>
      {React.createElement(
        action === "disliked" ? DislikeFilled : DislikeOutlined
      )}
      <span className="comment-action">{dislikes}</span>
    </span>,
  ];
  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: "Han Solo",
          avatar: "https://joeschmoe.io/api/v1/random",
          content: <p>{value}</p>,
          datetime: moment("2016-11-22").fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handlePaginate = (data) => {
    setCurrentPage(data.selected + 1);
    // getData(limit, data.selected + 1);
  };

  return (
    <>
      <div className="comments pt-3">
        <>
          <Comment
            avatar={<Avatar src={docimg} alt="Han Solo" />}
            content={
              <Editor
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
          {comments.length > 0 && (
            <CommentList actions={actions} comments={comments} />
          )}
        </>
      </div>
      <div className="mt-2 d-flex justify-content-end"><ReactPaginate
              previousLabel={"Prev"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={20}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePaginate}
              containerClassName={"pagination justify-content-center "}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              nextClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
            /></div>
    </>
  );
};
