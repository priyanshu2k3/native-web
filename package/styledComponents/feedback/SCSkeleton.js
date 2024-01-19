// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { Skeleton } from "@mui/material";
// eslint-disable-next-line import/no-unresolved
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";
import styled from "styled-components";

const defaultStyleClasses = [StyledComponentsClasses.FEEDBACK.SKELETON];

export const SCSkeleton = styled(
  Skeleton,
  {}
)((props) => ({ ...getEffectiveStyle([...defaultStyleClasses, ...(props?.styleClasses || [])]) }));
