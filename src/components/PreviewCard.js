import React from "react";
import WebFont from "webfontloader";
import styled from "styled-components";
import Loader from "./Loader";

const Text = styled.p`
	@font-face {
		font-family: ${({ family }) => family};
		src: ${({ family }) => {
			WebFont.load({
				google: {
					families: [family]
				},
				loading: () => {
					return <Loader />;
				}
			});
		}};
	}
	font-family: ${({ family }) => family}!important;
`;

const Button = styled.button`
	@font-face {
		font-family: ${({ family }) => family};
		src: ${({ family }) => {
			console.log(family);
			WebFont.load({
				google: {
					families: [family]
				},
				loading: () => {
					console.log("wait");
				}
			});
		}};
	}
	font-family: ${({ family }) => family}!important;
`;

const PreviewCard = ({ font }) => {
	return (
		<div className="rounded-lg bg-white overflow-y-scroll h-screen py-6 px-8">
			<p className="text-xs font-sen font-bold text-gray-500 mb-4">
				HEADING
			</p>
			<Text
				family={(font && font.family) || "Sen"}
				className="text-5xl font-black text-blue-900 m-0 p-0"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				Explore the real experience.
			</Text>
			<div className="h-8"></div>
			<p className="text-xs font-sen font-bold text-gray-500 mb-4">
				PARAGRAPH
			</p>
			<Text
				family={(font && font.family) || "Sen"}
				className="text-base text-blue-900 m-0 p-0"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				We aim to automate and optimize your logistics operations with
				scalable and reliable technology solutions, to help boost
				business efficiency and align ourselves with your goals.
			</Text>
			<div className="h-8"></div>
			<p className="text-xs font-sen font-bold text-gray-500 mb-4">
				BUTTON
			</p>
			<Button
				family={(font && font.family) || "Sen"}
				className="text-base font-bold text-white m-0 px-8 py-2 bg-blue-600 rounded-lg border-none"
				contentEditable="true"
				suppressContentEditableWarning={true}
			>
				Sign in with Google
			</Button>
		</div>
	);
};

export default PreviewCard;
