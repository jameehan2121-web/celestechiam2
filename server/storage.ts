import { 
  type User, type InsertUser, users,
  type Booking, type InsertBooking, bookings,
  type AvailabilitySlot, type InsertAvailabilitySlot, availabilitySlots
} from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAvailableSlots(serviceType: string): Promise<AvailabilitySlot[]>;
  createAvailabilitySlot(slot: InsertAvailabilitySlot): Promise<AvailabilitySlot>;
  createMultipleSlots(slots: InsertAvailabilitySlot[]): Promise<AvailabilitySlot[]>;
  markSlotAsBooked(slotId: string, bookingId: string): Promise<void>;
  deleteAvailabilitySlot(slotId: string): Promise<void>;
  getAllSlots(serviceType?: string): Promise<AvailabilitySlot[]>;
  
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBooking(id: string): Promise<Booking | undefined>;
  getBookingByStripeSession(sessionId: string): Promise<Booking | undefined>;
  updateBookingStatus(id: string, status: string, stripePaymentStatus?: string): Promise<Booking | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getAvailableSlots(serviceType: string): Promise<AvailabilitySlot[]> {
    return await db.select()
      .from(availabilitySlots)
      .where(and(
        eq(availabilitySlots.serviceType, serviceType),
        eq(availabilitySlots.isBooked, false)
      ));
  }

  async createAvailabilitySlot(slot: InsertAvailabilitySlot): Promise<AvailabilitySlot> {
    const [created] = await db.insert(availabilitySlots).values(slot).returning();
    return created;
  }

  async createMultipleSlots(slots: InsertAvailabilitySlot[]): Promise<AvailabilitySlot[]> {
    if (slots.length === 0) return [];
    return await db.insert(availabilitySlots).values(slots).returning();
  }

  async markSlotAsBooked(slotId: string, bookingId: string): Promise<void> {
    await db.update(availabilitySlots)
      .set({ isBooked: true, bookingId })
      .where(eq(availabilitySlots.id, slotId));
  }

  async deleteAvailabilitySlot(slotId: string): Promise<void> {
    await db.delete(availabilitySlots).where(eq(availabilitySlots.id, slotId));
  }

  async getAllSlots(serviceType?: string): Promise<AvailabilitySlot[]> {
    if (serviceType) {
      return await db.select().from(availabilitySlots)
        .where(eq(availabilitySlots.serviceType, serviceType));
    }
    return await db.select().from(availabilitySlots);
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const [created] = await db.insert(bookings).values(booking).returning();
    return created;
  }

  async getBooking(id: string): Promise<Booking | undefined> {
    const [booking] = await db.select().from(bookings).where(eq(bookings.id, id));
    return booking;
  }

  async getBookingByStripeSession(sessionId: string): Promise<Booking | undefined> {
    const [booking] = await db.select().from(bookings)
      .where(eq(bookings.stripePaymentIntentId, sessionId));
    return booking;
  }

  async updateBookingStatus(id: string, status: string, stripePaymentStatus?: string): Promise<Booking | undefined> {
    const updateData: Partial<Booking> = { status };
    if (stripePaymentStatus) {
      updateData.stripePaymentStatus = stripePaymentStatus;
    }
    const [updated] = await db.update(bookings)
      .set(updateData)
      .where(eq(bookings.id, id))
      .returning();
    return updated;
  }
}

export const storage = new DatabaseStorage();
