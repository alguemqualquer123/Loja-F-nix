import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { user } from "./getCookies"

export const Return = ({ path }) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate(path)
    } else {
      navigate(path)
    }
  }, [])
  return <></>
}