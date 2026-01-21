import { Ionicons } from '@expo/vector-icons'

export const icons = {
  index: ({ color }) => (
    <Ionicons name="home" size={24} color={color} />
  ),
  explore: ({ color }) => (
    <Ionicons name="compass" size={24} color={color} />
  ),
  create: ({ color }) => (
    <Ionicons name="add-circle" size={28} color={color} />
  ),
  profile: ({ color }) => (
    <Ionicons name="person" size={24} color={color} />
  ),
}
